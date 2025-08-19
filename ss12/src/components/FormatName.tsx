// bài 5
export const FormatName = () => {

  const user = {
    firstName: "Nguyễn Đăng",
    lastName: "Quang",
  };

  const formatName = (user: { firstName: string; lastName: string }) => {
    return `Họ và tên: ${user.firstName} ${user.lastName}`;
  };

  return (
    <div>
      {formatName(user)}
    </div>
  );
}

export default FormatName;
