// components/ReservationCompleteModal.tsx
'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ReservationCompleteModal({ onClose }: { onClose: () => void }) {
    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-white rounded-2xl shadow-2xl w-[90%] max-w-md p-8 relative"
            >
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                    <X size={24} />
                </button>

                <h2 className="text-2xl font-bold text-brand-navy text-center mb-4">
                    예매 도움 신청이 완료되었습니다!
                </h2>
                <p className="text-center text-gray-700 text-base">
                    헬퍼 매칭 현황은 마이페이지에서 확인할 수 있습니다.
                </p>
                <div className="mt-6 text-center">
                    <button
                        onClick={onClose}
                        className="bg-brand-navy text-white px-6 py-2 rounded-full hover:bg-brand-navy-dark transition"
                    >
                        확인
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
