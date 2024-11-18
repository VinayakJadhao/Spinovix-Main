class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    <footer class="text-white py-5 px-7 md:px-[96px] bg-footerbg">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-2 md:grid-cols-4">
                <div class="custom-column">
                    <h4 class="footerheading text-[18px] text-lg font-bold mb-4 capitalize">Solutions</h4>
                    <ul class="space-y-5 mb-3">
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Solutions</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Solutions</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Solutions</a>
                        </li>
                    </ul>
                </div>
                <div class="custom-column">
                    <h4 class="footerheading text-[18px] text-lg font-bold mb-4">Product</h4>
                    <ul class="space-y-5 mb-3">
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Product</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Product</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Product</a>
                        </li>
                    </ul>
                </div>
                <div class="custom-column">
                    <h4 class="footerheading text-[18px] text-lg font-bold mb-4">About us</h4>
                    <ul class="space-y-5 mb-3">
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">About us</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Customers</a>
                        </li>
                        <li class="footli hover:text-blue-800 duration-500 text-[16px] font-600">
                            <a href="#">Carrers</a>
                        </li>
                    </ul>
                </div>
                <div class="custom-column  md:flex-1">
                    <h4 class="footerheading text-[18px] text-lg font-bold mb-4">Stay in Touch</h4>
                  <p class="text-[16px] footli hover:text-blue-800 duration-500">
                        Get cloud security insights and the latest Spinnovix news
                    </p>
                    <form class="mt-4" id="subscription-form">
                        <input type="email" placeholder="Email Address" class="px-4 py-2 bg-transparent w-full emaild" required>
                        <button class="formb mt-2 px-4 py-2 rounded-lg w-full">Subscribe Now</button>
                        <p class="error-message"></p>
                    </form>
                </div>
            </div>

            <div class="footlast mt-[1.2rem] md:flex md:justify-between md:items-center" style="border-top: 1.5px solid; border-image: linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, #FFFFFF 52%, rgba(255, 255, 255, 0.1) 100%) 1;">
                <p class="text-[16px] font-bold hover:text-blue-800 duration-500 cursor-pointer">Copyright © 2024 Spinnovix Pvt. Ltd.</p>
                <div class="flex md:justify-end gap-2 mt-[2.5rem]">
                        <!-- social media icons -->

                    <a href="">
                        <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[3px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                            <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-linear-bg sico">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3263 1.9043H21.6998L14.3297 10.3278L23 21.7903H16.2112L10.894 14.8383L4.80995 21.7903H1.43443L9.31743 12.7804L1 1.9043H7.96111L12.7674 8.25863L18.3263 1.9043ZM17.1423 19.7711H19.0116L6.94539 3.81743H4.93946L17.1423 19.7711Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                
                    <a href="">
                        <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[3px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                            <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-linear-bg sico">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.3952 7.02212C17.6005 7.02368 16.9543 6.3802 16.9528 5.58548C16.9512 4.79076 17.5947 4.14457 18.3898 4.14302C19.1848 4.14146 19.831 4.78531 19.8326 5.58004C19.8338 6.37476 19.1903 7.02057 18.3952 7.02212Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0115 18.161C8.60909 18.1676 5.8451 15.4149 5.8385 12.0117C5.83188 8.60923 8.58536 5.84481 11.9878 5.8382C15.3909 5.83159 18.1553 8.5859 18.1619 11.9879C18.1685 15.3912 15.4143 18.1544 12.0115 18.161ZM11.992 8.00035C9.78365 8.00424 7.99594 9.79858 7.99983 12.0074C8.0041 14.2166 9.79882 16.0039 12.0072 15.9996C14.2164 15.9954 16.0041 14.2014 15.9998 11.9922C15.9955 9.78302 14.2008 7.99608 11.992 8.00035Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.1192 0.646479C4.88126 0.347876 5.75333 0.143362 7.03015 0.0830982C8.31011 0.0216726 8.71872 0.00767102 11.9769 0.00145262C15.2358 -0.00476578 15.6444 0.00766862 16.9244 0.0644334C18.2016 0.119643 19.0741 0.321049 19.8377 0.616544C20.6277 0.920974 21.298 1.33078 21.966 1.99603C22.6339 2.66205 23.0453 3.33002 23.3536 4.1189C23.6518 4.88174 23.8563 5.75306 23.917 7.03068C23.9776 8.31023 23.9924 8.71847 23.9986 11.9771C24.0048 15.2353 23.9916 15.6443 23.9356 16.925C23.88 18.2014 23.679 19.0743 23.3835 19.8375C23.0783 20.6276 22.6693 21.2979 22.004 21.9659C21.3388 22.6342 20.6701 23.0452 19.8812 23.3539C19.1184 23.6517 18.2471 23.8562 16.9702 23.9173C15.6903 23.9779 15.2817 23.9923 12.0224 23.9985C8.76459 24.0048 8.35598 23.9923 7.07605 23.9359C5.79882 23.88 4.92597 23.6789 4.16275 23.3838C3.37271 23.0782 2.70242 22.6696 2.03446 22.004C1.36611 21.3383 0.954386 20.67 0.646458 19.8811C0.347858 19.1186 0.144107 18.2469 0.0830727 16.9705C0.0220359 15.6901 0.00765506 15.2811 0.00143906 12.0229C-0.00480094 8.76435 0.00803667 8.35611 0.0640167 7.07616C0.1204 5.79855 0.320637 4.92606 0.61613 4.16206C0.921328 3.37239 1.33035 2.70248 1.99637 2.03413C2.6616 1.36616 3.33033 0.954017 4.1192 0.646479ZM4.94154 21.3679C5.36494 21.5308 6.00023 21.7252 7.17014 21.7761C8.43607 21.8309 8.81514 21.843 12.0185 21.8368C15.223 21.8309 15.6021 21.8173 16.8676 21.7579C18.0363 21.7022 18.6716 21.5055 19.0939 21.3407C19.6541 21.1218 20.0531 20.8601 20.4722 20.4406C20.8913 20.0195 21.1506 19.6194 21.3676 19.0591C21.5309 18.6354 21.7249 17.9996 21.7758 16.8297C21.8314 15.5646 21.8431 15.1851 21.8368 11.9809C21.831 8.77757 21.8174 8.3981 21.7572 7.13254C21.7019 5.96339 21.5056 5.32808 21.3404 4.90623C21.1215 4.34519 20.8606 3.94705 20.4399 3.52753C20.0192 3.10801 19.6191 2.84945 19.0581 2.6325C18.6355 2.46881 17.9994 2.27518 16.8303 2.22426C15.5643 2.16865 15.1849 2.15737 11.9808 2.1636C8.77743 2.16982 8.39836 2.18264 7.13281 2.24253C5.9633 2.29812 5.32877 2.49447 4.90575 2.65972C4.34587 2.87861 3.94696 3.13872 3.52746 3.5598C3.10871 3.98087 2.84938 4.38018 2.63244 4.94161C2.46993 5.36464 2.27434 6.00072 2.2242 7.16987C2.16898 8.43581 2.15733 8.81529 2.16355 12.0187C2.16939 15.2228 2.18298 15.6023 2.24248 16.8671C2.29729 18.037 2.49518 18.6715 2.65966 19.0949C2.87855 19.6544 3.13944 20.0533 3.55973 20.4729C3.98081 20.8908 4.38088 21.1509 4.94154 21.3679Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </a>
                    
                    <a href="">
                        <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[3px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                            <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-linear-bg sico">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_1170_757)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0099 0C5.36875 0 0 5.40833 0 12.0992C0 17.4475 3.43994 21.9748 8.21205 23.5771C8.80869 23.6976 9.02724 23.3168 9.02724 22.9965C9.02724 22.716 9.00757 21.7545 9.00757 20.7527C5.6667 21.474 4.97099 19.3104 4.97099 19.3104C4.43409 17.9082 3.63858 17.5478 3.63858 17.5478C2.54511 16.8066 3.71823 16.8066 3.71823 16.8066C4.93117 16.8868 5.56763 18.0486 5.56763 18.0486C6.64118 19.8913 8.37111 19.3707 9.06706 19.0501C9.16638 18.2688 9.48473 17.728 9.82275 17.4276C7.15817 17.1471 4.35469 16.1055 4.35469 11.458C4.35469 10.1359 4.8316 9.05428 5.58729 8.21304C5.46807 7.91263 5.0504 6.67043 5.70677 5.00787C5.70677 5.00787 6.72083 4.6873 9.00732 6.24981C9.98625 5.98497 10.9958 5.85024 12.0099 5.84911C13.024 5.84911 14.0577 5.98948 15.0123 6.24981C17.299 4.6873 18.3131 5.00787 18.3131 5.00787C18.9695 6.67043 18.5515 7.91263 18.4323 8.21304C19.2079 9.05428 19.6652 10.1359 19.6652 11.458C19.6652 16.1055 16.8617 17.1269 14.1772 17.4276C14.6148 17.8081 14.9924 18.5292 14.9924 19.6711C14.9924 21.2936 14.9727 22.5957 14.9727 22.9962C14.9727 23.3168 15.1915 23.6976 15.7879 23.5774C20.56 21.9745 23.9999 17.4475 23.9999 12.0992C24.0196 5.40833 18.6312 0 12.0099 0Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_1170_757">
                                    <rect width="24" height="24" fill="white"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </a>

                    <a href="">
                        <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)]  bg-white p-[3px] w-14 h-14 parenthex flex justify-center items-center via-cyan-700 to-linear-bg from-blue-600 -translate-y-[50%]">
                            <div class="[clip-path:polygon(_50%_0%,_100%_25%,_100%_75%,_50%_100%,_0%_75%,_0%_25%)] flex justify-center h-full w-full items-center bg-linear-bg sico">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.45455 21.0045H1.63636C0.733636 21.0045 0 20.2736 0 19.3681V5.45919C0 3.43555 2.30727 2.28191 3.92727 3.49555L12 9.54996L20.0727 3.49555C21.69 2.28191 24 3.43555 24 5.45919V19.3681C24 20.2709 23.2691 21.0045 22.3636 21.0045H18.5454V11.7318L12 16.6409L5.45456 11.7318L5.45455 21.0045Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                    </a>

    </div>
</div>            

    </footer>    
    `;
    }
}

customElements.define('special-footer', SpecialFooter);
