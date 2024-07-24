import { motion } from "framer-motion";
import { useState } from "react";

const AnimatedComponent: React.FC = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
      <motion.div
        animate={{ opacity: isToggled ? 1 : 0, x: isToggled ? 100 : 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        style={{ width: 100, height: 100, backgroundColor: "blue" }}
      />
    </div>
  );
};

export default AnimatedComponent;
