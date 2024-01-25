
'use client'

interface FooterListProps {
    title: string,
    name1: string,
    name2: string,
    name3: string,
    name4: string,
    name5: string,
    name6: string
}


const FooterData : FooterListProps[] = [
    {
        title: "Support",
        name1 : "Help Center",
        name2 : "AirCover",
        name3 : "AirCover",
        name4 : "Disability support",
        name5 : "Cancellation options",
        name6 : "Report neighborhood concern"
    },
    {
        title: "Hosting",
        name1 : "Airbnb your home",
        name2 : "AirCover for Hosts",
        name3 : "Hosting resources",
        name4 : "Community forum",
        name5 : "Hosting responsibly",
        name6 : "Airbnb-friendly apartments"
    },
    {
        title: "Airbnb",
        name1 : "Newsroom",
        name2 : "New features",
        name3 : "Careers",
        name4 : "Investors",
        name5 : "Gift cards",
        name6 : "Airbnb.org emergency stays"
    }
    

]

const RenderFooterList = ({ title, name1, name2, name3, name4, name5, name6 }: FooterListProps) => {
    return (
        <div className="flex flex-col ">
            <p className="font-semibold text-[0.875rem] mb-[10px]">{title}</p>
            <div className="flex flex-col gap-[10px] ">
                <a href="" className="hover:border-b-[1px]">{name1}</a>
                <a href="" className="hover:border-b-[1px]">{name2}</a>
                <a href="" className="hover:border-b-[1px]">{name3}</a>
                <a href="" className="hover:border-b-[1px]">{name4}</a>
                <a href="" className="hover:border-b-[1px]">{name5}</a>
                <a href="" className="hover:border-b-[1px]">{name6}</a>
            </div>
        </div>
    )
}



const Footer = () => {

    return (
        <div className=" border-t-[1px] border-[#aaa] p-[2em] mt-[3em] ">
            <div className="grid grid-cols-3 container">
                {FooterData.map((item : FooterListProps) => {
                    const {title,name1, name2, name3, name4, name5, name6} = item;
                    return (
                        <RenderFooterList title={title} name1={name1} name2={name2} name3={name3} name4={name4} name5={name5} name6={name6} key={title}/>
                    )
                })}
            </div>
        </div>
    )
}
export default Footer;