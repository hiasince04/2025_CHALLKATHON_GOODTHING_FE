'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SeniorMyPage from '@/app/senior/my-page/page';
import HelperMyPage from '@/app/helper/my-page/page';

export default function MyPageRouter() {
    const router = useRouter();
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
        const storedRole = localStorage.getItem('role');
        setRole(storedRole);
    }, []);

    if (!role) return null;

    if (role === 'senior') {
        return <SeniorMyPage />;
    }

    if (role === 'helper') {
        return <HelperMyPage />;
    }

    return <div>잘못된 접근입니다.</div>;
}
