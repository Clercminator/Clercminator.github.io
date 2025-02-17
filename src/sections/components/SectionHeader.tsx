export const SectionHeader = ({
    title,
    eyebrow,
    description,
}: {
    title: string;
    eyebrow: string;
    description: string;
}) => {
    return (
        <>
            <div className="flex justify-center">
                <p className="uppercase font-extrabold text-lg tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center">
                    {eyebrow}
                </p>
            </div>
            <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
                {title}
            </h2>
            <div className="flex justify-center">
                <p className="md:text-lg lg-text-xl text-white/60 mt-4 max-w-md max-auto text-center">
                    {description}
                </p>
            </div>
        </>
    );

};