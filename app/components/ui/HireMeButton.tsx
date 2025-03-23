import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XCircle, Mail, Send, AlertTriangle } from 'lucide-react';
import { Input, Textarea } from './Input'; // Jika Anda menggunakan komponen Input dari Shadcn
import Button from './Button';

// Pakage tidak tersedia, jadi saya akan simulasikan fungsinya
const RNMail = {
  sendMail: (options: unknown, callback: (error: string | null, result: string) => void) => {
    // Simulasi pengiriman email
    console.log('Simulating sending email with options:', options);

    // Dalam aplikasi nyata, Anda akan menggunakan library seperti Nodemailer atau API backend
    // untuk mengirim email. Karena kita tidak memiliki akses ke server email di sini,
    // kita hanya akan menampilkan pesan sukses atau gagal.

    setTimeout(() => {
      // Simulasi keberhasilan atau kegagalan secara acak
      const success = Math.random() < 0.8; // 80% chance of success
      if (success) {
        callback(null, 'OK'); // 'OK' menunjukkan sukses
        // alert context di web berbeda dengan mobile, jadi jangan gunakan Alert
        // Alert.alert('Sukses', 'Email berhasil dikirim!');
      } else {
        callback('Failed to send email', 'KO'); // 'KO' menunjukkan gagal
        // alert context di web berbeda dengan mobile, jadi jangan gunakan Alert
        // Alert.alert('Gagal', 'Email gagal dikirim.');
      }
    }, 1500); // Simulate network delay
  },
};

interface EmailModalProps {
  isVisible: boolean;
  onClose: () => void;
  toEmail?: string; // Alamat email penerima opsional
}

const EmailModal: React.FC<EmailModalProps> = ({ isVisible, onClose, toEmail = '' }) => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null); // State untuk menyimpan pesan error

  const handleSend = () => {
    if (!subject.trim() && !body.trim() && !toEmail.trim()) {
      // alert context di web berbeda dengan mobile, jadi jangan gunakan Alert
      // Alert.alert('Peringatan', 'Harap isi subjek, isi email, atau alamat email penerima.');
      setSendError('Harap isi subjek, isi email, atau alamat email penerima.');
      return;
    }
    setSendError(null); // Clear error sebelum mencoba mengirim
    setIsSending(true);
    RNMail.sendMail(
      {
        to: [toEmail], // Dapat berupa array alamat email
        subject: subject,
        body: body,
      },
      (error, result) => {
        setIsSending(false);
        if (error) {
          console.error('Error sending email:', error);
          // Alert.alert('Error', 'Terjadi kesalahan saat mengirim email: ' + error);
          setSendError('Terjadi kesalahan saat mengirim email: ' + error); // Set error message
        } else {
          console.log('Email sent:', result);
          if (result === 'OK') {
            // Alert.alert('Sukses', 'Email berhasil dikirim!'); // pindahkan ke dalam RNMail.sendMail
            onClose(); // Hanya tutup modal jika sukses
          }
        }
        // Reset form fields pada kondisi sukses
        if (!error && result === 'OK') {
          setSubject('');
          setBody('');
        }
      }
    );
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" // Tailwind untuk overlay
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-xl shadow-2xl p-6 w-full max-w-md" // Tailwind untuk modal content
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
                <Mail className="w-5 h-5 text-blue-500" />
                Tulis Email
              </h2>
              <Button onClick={onClose} className="text-gray-500 hover:text-gray-700">
                <XCircle className="w-5 h-5" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            <Input
              placeholder="Penerima (To)"
              value={toEmail}
              onChange={(e) => toEmail = e.target.value}
              type="email"
              className="mb-4"
            />
            <Input
              placeholder="Subjek"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mb-4"
            />
            <Textarea
              placeholder="Isi Email"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              className="mb-4 min-h-[100px]"
            />
            {sendError && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-md flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <p>{sendError}</p>
              </div>
            )}

            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={onClose} className="text-gray-700 hover:bg-gray-100">
                Batal
              </Button>
              <Button
                onClick={handleSend}
                disabled={isSending}
                className={isSending ? "bg-blue-500 text-white opacity-70 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}
              >
                {isSending ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 mr-3"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Kirim
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EmailModal;