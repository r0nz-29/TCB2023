import { useState } from "react";
import styles from './index.module.css';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import {useNavigate} from "react-router";

const Navbar = ({
  scrollDown,
  headerSection,
  projectSection,
  timelineSection,
  certificatesSection,
  contactSection
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleScroll = (ref) => {
    scrollDown(ref);
  };

  return (
    <nav className="bg-primary sticky">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-start gap-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src="./logo.svg" alt="#" height={40} width={40} />
            <p className='text-2xl font-bold'>Rocket Type</p>
          </div>
          <div className="hidden md:block">
            {/*<div className="ml-10 flex items-baseline space-x-4">*/}
            {/*<button className={styles.butt_nav} onClick={() => handleScroll(headerSection.current)}>*/}
            {/*  About*/}
            {/*</button>*/}
            {/*<button className={styles.butt_nav} onClick={() => handleScroll(projectSection.current)}>*/}
            {/*  DashBoard*/}
            {/*</button>*/}
            {/*<button className={styles.butt_nav} onClick={() => handleScroll(certificatesSection.current)}>*/}
            {/*  FAQs*/}
            {/*</button>*/}
            {/*</div>*/}
          </div>
          {/*<button className="text-white bg-indigo-900 block px-3 py-2 rounded-md text-base font-medium">*/}
          {/*  Sign In*/}
          {/*</button>*/}
          <div className="mr-2 flex md:hidden justify-end">
            <button
              onClick={() => toggleMenu()}
              type="button"
              className={styles.butt_menu}
              aria-expanded="false"
            >
              <AiOutlineMenu className={`${isOpen ? 'hidden' : 'block'}`} />
              <AiOutlineClose className={`${isOpen ? 'block' : 'hidden'}`} />
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <button className={styles.butt_nav} onClick={() => handleScroll(headerSection.current)}>
          About
        </button>
        <button className={styles.butt_nav} onClick={() => handleScroll(projectSection.current)}>
          DashBoard
        </button>
        <button className={styles.butt_nav} onClick={() => handleScroll(timelineSection.current)}>
          Experience
        </button>
        <button className={styles.butt_nav} onClick={() => handleScroll(certificatesSection.current)}>
          FAQs
        </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
