export default function AuthInput(props) {
  return (
    <input
      name={props.id}
      key={props.id}
      className={`${
        props.isAlreadyEmail ? "border-[#FF2E2E]" : "border-stone-300"
      } w-60 h-[30px] md:w-[460px] md:h-[47px] pl-[20px] md:pl-[30px] pr-2.5 py-2.5 rounded-3xl border  justify-start items-center gap-2.5 inline-flex text-[11px] md:text-[17px] font-semibold font-['Pretendard'] leading-relaxed`}
      onBlur={props.asyncOutFocus ?? props.outFocus}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
}
