import "./SectionHeader.css";
export default function SectionHeader({header,desc}) {
    return (
        <div className="row justify-content-center hi pb-5">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
                <h1 className="big big-2">{header}</h1>
                <h2 className="mb-4">
                    {header !== "Contact Me" && header !== "About Me" ? 'My' : ''} {header}</h2>
                    <p>
                        {desc}
                    </p>
            </div>
        </div>
    )
}
