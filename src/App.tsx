import { motion } from 'motion/react';
import InputForm from './components/InputForm';

function App() {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: 'easeInOut'
      }}
      className="min-h-screen bg-gray-100 py-20 px-4"
    >
      <InputForm />
    </motion.div>
  );
}

export default App;
