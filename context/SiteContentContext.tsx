
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { db } from '../firebase';
import { getDoc, doc, collection, getDocs, query, orderBy } from 'firebase/firestore';

interface SiteContentContextType {
  content: any;
  services: any[];
  teamMembers: any[];
  loading: boolean;
  refetch: () => void;
}

const SiteContentContext = createContext<SiteContentContextType | undefined>(undefined);

export const SiteContentProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [content, setContent] = useState<any>(null);
  const [services, setServices] = useState<any[]>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch single document for main site content
      const contentDocRef = doc(db, 'siteContent', 'main');
      const contentDoc = await getDoc(contentDocRef);
      if (contentDoc.exists()) {
        setContent(contentDoc.data());
      } else {
        setContent(null); // Explicitly set to null if not found
      }

      // Fetch services collection
      const servicesCollectionRef = collection(db, 'services');
      const servicesSnapshot = await getDocs(query(servicesCollectionRef, orderBy('order', 'asc')));
      setServices(servicesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

      // Fetch team members collection
      const teamMembersCollectionRef = collection(db, 'teamMembers');
      const teamMembersSnapshot = await getDocs(query(teamMembersCollectionRef, orderBy('order', 'asc')));
      setTeamMembers(teamMembersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));

    } catch (error) {
      console.error("Error fetching site content:", error);
      setContent(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const value = { content, services, teamMembers, loading, refetch: fetchData };

  return (
    <SiteContentContext.Provider value={value}>
      {children}
    </SiteContentContext.Provider>
  );
};

export const useSiteContent = () => {
  const context = useContext(SiteContentContext);
  if (context === undefined) {
    throw new Error('useSiteContent must be used within a SiteContentProvider');
  }
  return context;
};
