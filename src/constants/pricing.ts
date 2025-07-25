import { FaCheck } from "react-icons/fa6";
import { IoPeopleSharp, IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";

export const pricingData = [
  {
    id: 1,
    icon: IoPersonSharp,
    title: "Private",
    subtitle: "2 License",
    checkIcon: FaCheck,
    number: "$49",
    btnTxt: "Purchase",
    contents: [
      {
        id: 11,
        text: "Carefully crafted com",
      },
      {
        id: 21,
        text: "Amazing page examples",
      },
      {
        id: 31,
        text: "2 license code",
      },
    ],
  },
  {
    id: 2,
    icon: IoPeopleSharp,
    color: "#155dfc",
    title: "Bussiness",
    subtitle: "5 License",
    checkIcon: FaCheck,
    number: "$129",
    btnTxt: "Purchase",
    contents: [
      {
        id: 12,
        text: "5 analytics campaings",
      },
      {
        id: 22,
        text: "300 keywords",
      },
      {
        id: 32,
        text: "15 social pages",
      },
    ],
  },
  {
    id: 3,
    icon: MdGroups,
    title: "Corporate",
    subtitle: "20 License",
    checkIcon: FaCheck,
    number: "$189",
    btnTxt: "Purchase",
    contents: [
      {
        id: 13,
        text: "100 analytics campaings",
      },
      {
        id: 23,
        text: "7500 keywords",
      },
      {
        id: 33,
        text: "150 social pages",
      },
    ],
  },
];
