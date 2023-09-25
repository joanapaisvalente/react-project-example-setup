import {create} from 'zustand';

interface LoginState {
    name: string;
    setName: (name: string) => void;
    email: string;
    setEmail: (email: string) => void;
}

const useStore = create<LoginState>((set) => ({
    name: "",
    setName: (name) => 
        set((state) => ({
            ...state,
            name
        })),
    email: "",
    setEmail: (email) => 
        set((state) => ({
            ...state,
            email,
        }))
}));

export default useStore;