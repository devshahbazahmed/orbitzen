'use client';
import Link from 'next/link';
import { Search, History, LifeBuoy } from 'lucide-react';
import { motion } from 'motion/react';

export default function NotFoundBody() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="flex-1 flex items-center justify-center px-6"
    >
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Illustration */}
        <motion.div
          initial={{
            opacity: 0,
            x: -50,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut',
          }}
          className="flex justify-center"
        >
          <div className="relative bg-white/2 border border-white/10 backdrop-blur-xl">
            <div className="absolute inset-0 flex items-center justify-center  border border-white/5">
              <span className="text-[220px] font-light text-white/5">404</span>
            </div>

            <div className="relative h-85 w-85 rounded-3xl border border-white/20 bg-[#2E62FF]/20 flex items-center justify-center">
              <div className="h-62.5 w-62.5 rounded-2xl border border-white/15 bg-[#2E62FF]/15 flex items-center justify-center">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="text-7xl"
                >
                  🛰️
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <div className="inline-flex items-center rounded-full bg-[#2E62FF]/15 px-4 py-1 text-xs tracking-widest uppercase text-[#7EA2FF] font-medium border border-[#2E62FF]/20">
              Connection Severed
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-6xl font-bold tracking-tight text-white"
          >
            You&apos;ve drifted
            <br />
            out of orbit.
          </motion.h1>

          <motion.p className="mt-6 text-lg text-zinc-400 max-w-lg">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved to a different sector of the command center.
          </motion.p>

          <div className="mt-10 flex flex-wrap gap-4 items-center">
            <motion.div
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: 0.98,
              }}
            >
              <Link
                href="/dashboard"
                className="bg-[#2E62FF] hover:bg-[#2450d6] text-white shadow-[0_0_40px_rgba(46,98,255,0.35)] px-8 py-4 rounded-xl font-medium"
              >
                Back to Dashboard
              </Link>
            </motion.div>

            <button className="border border-white/10 bg-white/2 backdrop-blur-xl text-white px-8 py-4 rounded-xl font-medium flex items-center gap-2">
              <LifeBuoy className="h-4 w-4" />
              Contact Support
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-10 max-w-md ">
            <button className="bg-white/2 border border-white/10 backdrop-blur-xl hover:border-[#2E62FF]/40 hover:bg-white/4 transition-all rounded-xl p-5 text-left">
              <Search className="h-5 w-5 text-[#2E62FF]" />
              <p className="mt-3 font-medium">Search Tools</p>
              <p className="text-sm text-zinc-400">Find any command</p>
            </button>

            <button className="bg-white/2 border border-white/10 backdrop-blur-xl hover:border-[#2E62FF]/40 hover:bg-white/4 transition-all rounded-xl p-5 text-left">
              <History className="h-5 w-5 text-[#2E62FF]" />
              <p className="mt-3 font-medium">Recent Activity</p>
              <p className="text-sm text-zinc-400">Jump back in</p>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
