'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function LoginChoiceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
    const router = useRouter();
    const [internalOpen, setInternalOpen] = useState(open);

    useEffect(() => {
        setInternalOpen(open);
    }, [open]);

    const handleLogin = (role: 'senior' | 'helper') => {
        onClose();
        router.push(`/login?role=${role}`);
    };

    return (
        <Dialog open={internalOpen} onOpenChange={setInternalOpen}>
            <DialogContent className="text-center space-y-4">
                <p className="text-lg font-semibold">어떤 역할로 로그인할까요?</p>
                <div className="flex justify-center gap-4">
                    <Button onClick={() => handleLogin('senior')}>시니어 팬으로 로그인하기</Button>
                    <Button onClick={() => handleLogin('helper')} variant="outline">
                        헬퍼 로그인 하기
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
