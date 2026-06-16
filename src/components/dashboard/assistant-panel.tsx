import ScheduleCard from './schedule-card';
import AIInsightCard from './ai-insight-card';
import DeepWorkCard from './deep-work-card';
import CommandCard from './command-card';

export default function AssistantPanel() {
  return (
    <div
      className="
        flex
        flex-col
        gap-5
        border-l
        border-white/10
        bg-white/2
        p-6
      "
    >
      <ScheduleCard />

      <AIInsightCard />

      <DeepWorkCard />

      <CommandCard />
    </div>
  );
}
