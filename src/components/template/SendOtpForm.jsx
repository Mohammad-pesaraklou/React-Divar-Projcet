import { sendOtp } from "../../utils/auth"

// eslint-disable-next-line react/prop-types
function SendOtpForm({ mobile, setMobile, setStep }) {

    const submitHandler = async (event) => {
        event.preventDefault()
        if (mobile.length !== 11) return
        console.log(mobile)
        const { response, error } = await sendOtp(mobile)
        console.log({ response, error });
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>شماره خود را وارد کنید</h3>
                <input type="number" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                <button>ارسال</button>
            </form>
        </div>
    )
}

export default SendOtpForm