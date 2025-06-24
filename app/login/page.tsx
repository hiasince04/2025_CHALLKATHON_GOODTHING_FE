'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import type React from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const role = searchParams.get('role') || 'senior';
    const from = searchParams.get('from') || '';
    const redirectFlag = typeof window !== 'undefined' ? localStorage.getItem('loginRedirect') : null;

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // ✅ 로그인 시 역할 기억
        localStorage.setItem('role', role);

        // ✅ 마이페이지로 가는 흐름
        if (role === 'senior') {
            if (redirectFlag === 'mypage' || from === 'mypage') {
                localStorage.removeItem('loginRedirect');
                router.push('/senior/my-page');
            } else {
                router.push('/senior/select-team');
            }
        } else {
            if (redirectFlag === 'mypage' || from === 'mypage') {
                localStorage.removeItem('loginRedirect');
                router.push('/helper/my-page');
            } else {
                router.push('/helper/dashboard');
            }
        }
    };

    return (
        <div className="flex items-center justify-center py-12">
            <Card className="w-full max-w-lg shadow-xl">
                <CardHeader className="text-center">
                    <CardTitle className="text-3xl text-brand-navy">
                        {role === 'senior' ? '어르신 팬 로그인' : '헬퍼 로그인'}
                    </CardTitle>
                    <CardDescription className="text-lg pt-2">
                        같이가요 서비스 이용을 위해 로그인해주세요.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-lg">
                                아이디 (이메일 또는 전화번호)
                            </Label>
                            <Input
                                id="email"
                                type="text"
                                placeholder="example@email.com"
                                className="h-14 text-lg px-4"
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-lg">
                                비밀번호
                            </Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="h-14 text-lg px-4"
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full h-14 text-lg mt-4">
                            로그인
                        </Button>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-between text-sm text-muted-foreground px-6 pb-6">
                    <span>계정이 없으신가요?</span>
                    <Link href="/signup" className="text-brand-navy font-semibold">
                        회원가입
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
