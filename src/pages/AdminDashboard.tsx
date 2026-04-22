import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function AdminDashboard() {
  const [inquiries, setInquiries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        const res = await fetch("/api/admin/inquiries");
        const data = await res.json();
        setInquiries(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen bg-premium-white p-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold text-navy">Admin Dashboard</h1>
          <button onClick={() => window.location.href = "/"} className="text-sm font-bold text-gold uppercase tracking-widest">Back to Site</button>
        </div>

        <div className="bg-white rounded-[40px] shadow-xl overflow-hidden">
          <div className="p-10 border-b border-navy/5">
            <h2 className="text-2xl font-bold text-navy">Admissions Inquiries</h2>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-navy/5 text-navy/40 text-[10px] font-bold uppercase tracking-widest">
                <tr>
                  <th className="p-8">Parent Name</th>
                  <th className="p-8">Contact Info</th>
                  <th className="p-8">Grade</th>
                  <th className="p-8">Status</th>
                  <th className="p-8">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-navy/5">
                {loading ? (
                  <tr><td colSpan={5} className="p-20 text-center text-gray-400">Loading inquiries...</td></tr>
                ) : inquiries.length === 0 ? (
                  <tr><td colSpan={5} className="p-20 text-center text-gray-400">No inquiries found.</td></tr>
                ) : inquiries.map((inquiry) => (
                  <motion.tr 
                    key={inquiry._id} 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    className="hover:bg-navy/5 transition-colors"
                  >
                    <td className="p-8 font-bold text-navy">{inquiry.parentName}</td>
                    <td className="p-8">
                      <div className="text-sm text-gray-600">{inquiry.email}</div>
                      <div className="text-xs text-gray-400">{inquiry.phone}</div>
                    </td>
                    <td className="p-8">
                      <span className="px-3 py-1 bg-sky/10 text-sky text-[10px] font-bold uppercase rounded-full">{inquiry.grade}</span>
                    </td>
                    <td className="p-8">
                      <span className="px-3 py-1 bg-gold/10 text-gold text-[10px] font-bold uppercase rounded-full">{inquiry.status}</span>
                    </td>
                    <td className="p-8 text-xs text-gray-400">{new Date(inquiry.createdAt).toLocaleDateString()}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
