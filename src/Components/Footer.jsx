

const Footer = () => {
    return (
        <footer className=" shadow-md mt-8 bg-gray-100 py-5" >
            <div className="text-center">
                <h1 className="text-4xl font-bold my-2">Gadget Heaven</h1>
                <p className="text-lg">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="border-b mt-10 "></div>

            <div className="footer  p-10 md:flex justify-center text-center md:gap-36">
                <nav >
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products Supports</a>
                    <a className="link link-hover">Order tacking</a>
                    <a className="link link-hover"> Shping & Delivery</a>
                    <a className="link link-hover">Return</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Career</a>
                    <a className="link link-hover">Contact</a>
                    
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of Service</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>

        </footer>
    );
};

export default Footer;