'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Ticket, UserCircle } from 'lucide-react';
import LoginChoiceModal from '@/components/LoginChoiceModal';

export default function SiteHeader() {
    const pathname = usePathname();
    const router = useRouter();

    const [isLoginChoiceOpen, setIsLoginChoiceOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userType, setUserType] = useState<string | null>(null);

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        const type = localStorage.getItem('userType');
        setIsLoggedIn(!!token);
        setUserType(type);
    }, []);

    const handleMyPageClick = () => {
        if (!isLoggedIn) {
            alert('로그인부터 해주세요!');
            setIsLoginChoiceOpen(true);
        } else {
            if (userType === 'senior') {
                router.push('/senior/status'); // 예매 요청 현황 페이지로 이동
            } else if (userType === 'helper') {
                router.push('/helper/my-page'); // 기존 헬퍼 마이페이지로 이동
            }
        }
    };

    const handleLoginChoice = (role: 'senior' | 'helper') => {
        setIsLoginChoiceOpen(false);
        router.push(`/login?role=${role}`);
    };

    return (
        <header className="w-full bg-brand-navy text-white py-3 px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center gap-2">
                <Ticket className="w-8 h-8" /> 같이가요
            </Link>
            <div className="flex gap-4">
                <button onClick={handleMyPageClick} className="flex items-center gap-2 hover:underline">
                    <UserCircle className="w-6 h-6" /> 마이페이지
                </button>
            </div>

            {/* 🔽 선택지 모달 */}
            <LoginChoiceModal
                open={isLoginChoiceOpen}
                onClose={() => setIsLoginChoiceOpen(false)}
                onSelect={handleLoginChoice}
            />
        </header>
    );
}
