import {stringify} from "@/constants/stringify";

export default function Footer(){
    return(
        <footer className={"bg-blue-50 dark:bg-background dark:text-gray-200  text-gray-900 py-12"}>
            <div className={"container mx-auto px-4 justify-center items-center flex"}>
                {stringify.footerTitle}
            </div>
        </footer>
    )
}