import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { comparisonRows } from '@/data/pricing';

export default function ComparisonTable() {
  return (
    <section className="py-32">
      <h2 className="text-center text-4xl font-bold mb-12">
        Detailed Comparison
      </h2>

      <div className="rounded-xl border border-white/10 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Features</TableHead>
              <TableHead>Starter</TableHead>
              <TableHead>Pro</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {comparisonRows.map((row) => (
              <TableRow key={row.feature}>
                <TableCell>{row.feature}</TableCell>
                <TableCell>{row.starter}</TableCell>
                <TableCell>{row.pro}</TableCell>
                <TableCell>{row.enterprise}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
