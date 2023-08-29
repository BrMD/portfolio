const ItemContact = ({ logo, link }: { logo: string; link: string }) => {
  return (
    <div className="m-4">
      <a href={link}>
        <img src={logo} width={"40px"} />
      </a>
    </div>
  );
};

export default ItemContact;
