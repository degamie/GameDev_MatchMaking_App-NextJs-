
// "use-client"

// import React from 'react'
// import  type Leaderboard from 'LeaderBoard'
// import { createContext, useState, useEffect, useCallback } from "react";
// import { onAuthStateChanged, User } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { useRouter } from "next/navigation";
// import db, { auth } from "@/lib/firebase";
// import { Loader2 } from "lucide-react";


// const AuthContext=createContext<{
//     user:Leaderboard|null,    
//     loading: null
// }>({
//     user:null,
//     loading:true
// });

// export function AuthContext() { 
//     useEffect(() => {
// 		const unsubscribe = onAuthStateChanged(auth, async (user) => {
// 			if (user?.uid) {
// 				setUser(user);
// 				setLoading(false);
// 			} else {
// 				return router.push("/login");
// 			}
// 		});

// 		return () => unsubscribe();
// 	}, [router]);

// 	const getUser = useCallback(async () => {
// 		if (!user) return null;
// 		const docSnap = await getDoc(doc(db, "leaderboard", user.uid));
// 		if (docSnap.exists()) {
// 			setUserData({ id: user.uid, ...docSnap.data() } as Leaderboard);
// 		} else {
// 			return null;
// 		}
// 	}, [user]);

// 	useEffect(() => {
// 		getUser();
// 	}, [getUser]);

// 	return (
// 		<>
// 			{userData ? (
// 				<AuthContext.Provider value={{ loading, user: userData }}>
// 					{children}
// 				</AuthContext.Provider>
// 			) : (
// 				<main className='flex items-center justify-center h-screen'>
// 					<Loader2 className='animate-spin text-4xl font-bold text-blue-500 text-center' />
// 				</main>
// 			)}
// 		</>
// 	);
// }

// export default AuthContext