export default function AuthBtn(props) {
  return (
    <div
      className={`w-60 h-[30px] md:w-[460px] md:h-[47px] p-2.5 ${
        props.disabled ? "bg-gray-500" : "bg-gray-800"
      } rounded-3xl justify-center items-center gap-2.5 inline-flex`}
    >
      <button
        disabled={props.disabled}
        className="text-center text-white text-sm md:text-[17px] font-semibold font-['Pretendard'] leading-[21px] md:leading-relaxed"
        onClick={props.onClick}
      >
        {props.btnText}
      </button>
    </div>
  );
}
