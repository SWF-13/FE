import NavigationBar from "@/app/components/NavigationBar/NavigationBar";

export default function LoginInput() {
  return (
    <div className="relative flex flex-col items-center justify-center h-full p-6">
      <span className="text-2xl font-bold font-notoSans">가입한 번호로</span>
      <span className="text-2xl font-bold font-notoSans">비밀번호 찾기</span>
      <form className="w-full max-w-sm flex flex-col gap-4">
        <input
          type="email"
          placeholder="비번찾기"
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="w-full p-3 border rounded-lg"
        />
        <button
          type="submit"
          className="w-full p-3 bg-blue-500 text-white rounded-lg"
        >
          로그인
        </button>
      </form>
      <NavigationBar></NavigationBar>
    </div>
  );
}
