import logo from "/images/footerLogo.png"
const ComingSoon = () => {
    return (
        <div
            className="relative h-screen w-full flex items-center justify-center bg-cover bg-center text-center"
            style={{ backgroundImage: "url(https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500)" }}
        >
            <div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

            <div className="z-50 flex flex-col justify-center items-center text-white w-full h-screen space-y-10">
                <h1 className="text-7xl">Coming Soon...</h1>
                <p>Stay tuned for something amazing!!!</p>
            </div>

        </div>
    );
}

export default ComingSoon;
