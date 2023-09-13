import NormalText from "./NormalText";
export default function RadioButton({ title }) {
    return (
        <label className="container-radio md:pl-[25px]  lg:pl-[35px] !pl-[20px] md:mb-[12px] !mb-0">
            <input type="radio" name="phase" />
            <span
                className="checkmark md:top-[2px] lg:top-[3px] lg:after:!top-[6px] lg:after:!left-[6px] lg:h-[20px] lg:w-[20px] md:w-[16px]  md:h-[16px] md:after:!top-[4px] md:after:!left-[4px] !w-[15px] !h-[15px] after:!top-[3.4px] after:!left-[3.58px]"
            ></span>
            <NormalText>{title}</NormalText>
        </label>
    );
}
