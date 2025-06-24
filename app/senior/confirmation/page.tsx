'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import ReservationCompleteModal from '@/components/ReservationCompleteModal';

export default function ConfirmationPage() {
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleReserve = () => {
        // 예매 요청 처리 로직 (API 호출 가능)
        setShowModal(true); // ✅ 모달 먼저 띄움
    };

    const handleConfirmAndMove = () => {
        setShowModal(false);
        router.push('/senior/my-page'); // ✅ 확인 누르면 이동
    };

    return (
        <div className="py-12 px-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-brand-navy mb-8 text-center">예매를 확정하시겠습니까?</h2>

            {/* 예매 버튼 */}
            <div className="text-center">
                <Button className="text-lg px-8 py-4" onClick={handleReserve}>
                    예매 확정
                </Button>
            </div>

            {/* 팝업 모달 */}
            {showModal && <ReservationCompleteModal onClose={handleConfirmAndMove} />}
        </div>
    );
}
