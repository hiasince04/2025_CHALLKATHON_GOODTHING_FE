'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MyPageRouter() {
    const router = useRouter();

    useEffect(() => {
        const storedRole = localStorage.getItem('role');

        if (storedRole === 'senior') {
            router.replace('/senior/my-page'); // ✅ 시니어용
        } else if (storedRole === 'helper') {
            router.replace('/helper/my-page'); // ✅ 헬퍼용
        } else {
            alert('잘못된 접근입니다.');
            router.replace('/');
        }
    }, [router]);

    return null; // ✅ 더 이상 직접 페이지 import해서 렌더링하지 않음
}
