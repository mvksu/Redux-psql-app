import Card from "./Card";
import { motion } from "framer-motion";

export default function Items({ items }) {
  return (
    <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 cursor-pointer">
      {items.map((item, index) => (
        <Card
          key={item.id}
          first_name={item.first_name}
          last_name={item.last_name}
          birth_date={item.birth_date}
          id={item.id}
          index={index}
        />
      ))}
    </motion.div>
  );
}
