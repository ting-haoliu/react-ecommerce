const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>Ting-Hao Liu © {currentYear}. All rights reserved.</p>
        </footer>
    )
}

export default Footer;