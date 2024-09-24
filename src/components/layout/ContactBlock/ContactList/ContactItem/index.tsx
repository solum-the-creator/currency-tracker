type ContactItemProps = {
  name: string;
  value: string;
};

export const ContactItem: React.FC<ContactItemProps> = ({ name, value }) => {
  return (
    <li>
      <strong>{name}:</strong> {value}
    </li>
  );
};
