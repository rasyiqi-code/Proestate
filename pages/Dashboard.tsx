
import React, { useState, useEffect } from 'react';
import { useSiteContent } from '../context/SiteContentContext';
import { db, storage } from '../firebase';
import { doc, setDoc, collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
// FIX: Header is a default export, so it should be imported without curly braces.
import Header from '../components/Header'; // Assuming Header can be used standalone
import { useAuth } from '../auth/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
    const { content, services, teamMembers, loading, refetch } = useSiteContent();
    const [formData, setFormData] = useState<any>(null);
    const [formServices, setFormServices] = useState<any[]>([]);
    const [formTeam, setFormTeam] = useState<any[]>([]);
    const { logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (content) {
            setFormData(JSON.parse(JSON.stringify(content))); // Deep copy
        }
        if(services) {
            setFormServices(JSON.parse(JSON.stringify(services)));
        }
        if(teamMembers) {
            setFormTeam(JSON.parse(JSON.stringify(teamMembers)));
        }
    }, [content, services, teamMembers]);
    
    const handleLogout = async () => {
        try {
          await logout();
          navigate('/');
        } catch (error) {
          console.error("Failed to log out", error);
        }
      };

    const handleSave = async () => {
        if (!formData) return;
        try {
            // Save main content
            const contentDocRef = doc(db, 'siteContent', 'main');
            await setDoc(contentDocRef, formData, { merge: true });

            // Save services
            for (const service of formServices) {
                const serviceDocRef = doc(db, 'services', service.id);
                const { id, ...serviceData } = service;
                await updateDoc(serviceDocRef, serviceData);
            }
            
            // Save team members
            for (const member of formTeam) {
                 const memberDocRef = doc(db, 'teamMembers', member.id);
                 const { id, ...memberData } = member;
                 await updateDoc(memberDocRef, memberData);
            }

            alert('Content saved successfully!');
            refetch();
        } catch (error) {
            console.error("Error saving content:", error);
            alert('Failed to save content.');
        }
    };
    
    const handleImageUpload = async (file: File, path: string, fieldPath: string) => {
        if (!file) return;
        const storageRef = ref(storage, `${path}/${file.name}`);
        try {
            const snapshot = await uploadBytes(storageRef, file);
            const downloadURL = await getDownloadURL(snapshot.ref);
            
            // Update state dynamically
            const keys = fieldPath.split('.');
            let tempState = { ...formData };
            let currentLevel = tempState;
            for(let i = 0; i < keys.length - 1; i++) {
                currentLevel = currentLevel[keys[i]];
            }
            currentLevel[keys[keys.length - 1]] = downloadURL;
            setFormData(tempState);

            alert('Image uploaded! Remember to save all changes.');
        } catch (error) {
            console.error("Error uploading image: ", error);
            alert('Image upload failed.');
        }
    };

    if (loading || !formData) {
        return <div>Loading Dashboard...</div>;
    }

    return (
        <div className="bg-pro-light-gray min-h-screen">
            <header className="bg-white shadow-md">
                 <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-pro-dark-blue">Dashboard</h1>
                    <div>
                        <Link to="/" className="text-pro-blue hover:underline mr-4">View Site</Link>
                        <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors duration-300">
                          Logout
                        </button>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-6 py-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Global Settings</h2>
                    <label className="block mb-2">Company Name:
                        <input type="text" value={formData.global?.companyName} onChange={e => setFormData({...formData, global: {...formData.global, companyName: e.target.value}})} className="w-full p-2 border rounded" />
                    </label>
                    <label className="block mb-2">Tagline:
                        <input type="text" value={formData.global?.tagline} onChange={e => setFormData({...formData, global: {...formData.global, tagline: e.target.value}})} className="w-full p-2 border rounded" />
                    </label>
                    <label className="block mb-2">Logo:
                        <input type="file" onChange={e => handleImageUpload(e.target.files![0], 'logos', 'global.logoUrl')} className="w-full p-2 border rounded" />
                        {formData.global?.logoUrl && <img src={formData.global.logoUrl} alt="logo" className="w-20 h-20 mt-2 object-contain"/>}
                    </label>
                </div>
                
                 <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h2 className="text-xl font-bold mb-4 border-b pb-2">Hero Section</h2>
                    <label className="block mb-2">Background Image:
                        <input type="file" onChange={e => handleImageUpload(e.target.files![0], 'hero', 'hero.imageUrl')} className="w-full p-2 border rounded" />
                        {formData.hero?.imageUrl && <img src={formData.hero.imageUrl} alt="hero background" className="w-40 mt-2 object-cover"/>}
                    </label>
                    <label className="block mb-2">Title:
                        <input type="text" value={formData.hero?.title} onChange={e => setFormData({...formData, hero: {...formData.hero, title: e.target.value}})} className="w-full p-2 border rounded" />
                    </label>
                     <label className="block mb-2">Subtitle:
                        <textarea value={formData.hero?.subtitle} onChange={e => setFormData({...formData, hero: {...formData.hero, subtitle: e.target.value}})} className="w-full p-2 border rounded" />
                    </label>
                </div>

                {/* Add other sections similarly */}

                <div className="mt-8 text-right">
                    <button onClick={handleSave} className="bg-pro-blue text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors">
                        Save All Changes
                    </button>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;