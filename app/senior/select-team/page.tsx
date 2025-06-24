'use client';

import { KBO_TEAMS, type KboTeam } from '@/components/kbo-teams';
import { useRouter } from 'next/navigation';

export default function SelectTeamPage() {
    const router = useRouter();

    const handleTeamSelect = (team: KboTeam) => {
        router.push(`/senior/select-date?teamId=${team.id}`);
    };

    return (
        <div className="py-8">
            <h2 className="text-3xl font-bold text-brand-navy mb-8 text-center">응원하는 KBO 팀을 선택해주세요!</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 text-center">
                {KBO_TEAMS.map((team) => (
                    <button
                        key={team.id}
                        onClick={() => handleTeamSelect(team)}
                        className="text-lg text-brand-navy hover:text-brand-navy-light font-semibold border-b border-transparent hover:border-brand-navy transition"
                    >
                        {team.name}
                    </button>
                ))}
            </div>
        </div>
    );
}
