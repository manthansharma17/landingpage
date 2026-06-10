import { Phone, ArrowRight, Mail } from "lucide-react";
const icons = [
  { id: "phone", Icon: Phone, href: "#" },
  { id: "arrow", Icon: ArrowRight, href: "#" },
  { id: "mail", Icon: Mail, href: "#" },
];

function SocialIcons() {
  return (
    <div className="flex items-center space-x-3">
      {icons.map(({ id, Icon, href }) => (
        <a
          key={id}
          href={href}
          className="w-10 h-10 flex items-center justify-center rounded-full glass-card hover:bg-brandOrange transition-colors duration-200"
        >
          <Icon size={18} strokeWidth={2} />
        </a>
      ))}
    </div>
  );
}

export default SocialIcons;
