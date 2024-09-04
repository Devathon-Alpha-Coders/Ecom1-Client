import { useState, useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { firebaseAuth } from "src/shared/config/firebase.config";

const useFirebaseAuth = () => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
            if (!user) return;
            setUser(user);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    return { user, isLoading };
};

export default useFirebaseAuth;
