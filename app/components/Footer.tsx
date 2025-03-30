import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
      <div>
        <div className="flex gap-6 items-center justify-center mb-3">
          <Link href="https://www.linkedin.com/in/shashanx/" target="_blank" className="hover:opacity-70 transition-opacity">
            <Image src="/linkedin.svg" width={24} height={24} alt="LinkedIn" />
          </Link>
          <Link href="mailto:shashankjha.0052@gmail.com" target="_blank" className="hover:opacity-70 transition-opacity">
            <Image src="/email.svg" width={24} height={24} alt="Email" />
          </Link>
          <Link href="https://github.com/shashanx52" target="_blank" className="hover:opacity-70 transition-opacity">
            <Image src="/github.svg" width={24} height={24} alt="GitHub" />
          </Link>
          <Link href="https://leetcode.com/u/shashanx/" target="_blank" className="hover:opacity-70 transition-opacity">
            <Image src="/leetcode.svg" width={24} height={24} alt="LeetCode" />
          </Link>
        </div>
        <p className="text-gray-400">
          Made by <span className="font-medium">😊 Shashank Jha</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 
