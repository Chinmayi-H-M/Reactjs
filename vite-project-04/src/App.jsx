import React from 'react'
import Card from './components/card'

const App = () => {
  const jobs = [
    {
      id: 1,
      company: "Amazon",
      posted: "5 days ago",
      title: "Senior UI/UX Designer",
      tags1: "Part time",
      tags2: "Senior level",
      rate: "$120/hr",
      location: "Mumbai, India",
      image:
        "https://i.pinimg.com/736x/36/ff/72/36ff72fc8d310f1353ecb2e5862296ab.jpg",
    },
    {
      id: 2,
      company: "Google",
      posted: "2 days ago",
      title: "Product Designer",
      tags1: "Full time",
      tags2: "Mid level",
      rate: "$95/hr",
      location: "Bangalore, India",
      image:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QDg8QEA8PDhAQDg8QDxAPEA8SDhAPFhEWFhURFhUZKCggGBolGxUVITElJSorLy4uFx8zPzMtNygtLisBCgoKDg0OGhAQGi0mHyUvLTM2LystLzUrLS4tLS0xLTUtLS0tLS0vMC0rKystLS8tLy0tLy0tLS0tLS0rLi0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAABgEDBAUHAv/EAEUQAAICAAIGBgQLBgQHAAAAAAABAgMEEQUGEiExUSJBUmFxkRMygaEHFiNCYnKSk7HB0RQzgrPC8DWi0uEVNENEVGOD/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAgUGAQf/xAA4EQEAAgECAgYIBQQCAwEAAAAAAQIDBBEFURIhMUGR0RMiYXGBobHBFBUy4fAGI0JSM/E0YoIk/9oADAMBAAIRAxEAPwDuIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKN5AaXH614KnNO5WSWfRqTsefLNdFPxZDbUY697Y4eFarL1xTaPb1fv8AJpMT8IUP+lhpy77LIw90VIhnWR3Q2OP+n7f55Ij3Rv8AXZgW6/4l+rTRH63pJfg0Rzq7d0QtV4Bh/wAr2+UebwtfsX114b7Fv+ofi78oZfkGm/2t4x5Mqn4QbPn4aEuezbKPuaZnGrnvhBb+n6f45J+MfvDa4TXvCS3WRtp73Hbj/lzfuJa6mk9qll4FqK/omLfHafn1fNIMFpCm9Z1WwsS47Mk2vFcV7Sat4t2S1eXT5cM7ZKzHvZJkhAAAAAAAAAAAAAAAAAAAAAUbAimnNdaqs4YdK+a3befyMX4r1/Zu7ynk1dY6q9f0bvR8FyZfWy+rHLv/AG+Pgg+lNMYnEt+mtlKOf7tdGpfwrc/F5sp3y2v+qXSafR4dPH9uu08+/wAWvMVoAqBU9FT14qjKHj3XJxkpRbjJcJRbUl4Nb0ZQxtEWjaY3hJ9D6531ZRvX7RDnuVyXjwl7fMsUzWjt62m1XBcWTrxerPy/b4eCdaM0pTiYbdM1JfOXCcXylHii1W0WjeHNajTZdPbo5I2+k+5mGSAAAAAAAAAAAAAAAAAALGNxddNcrLJKEI8W/wAEut9xhkyVx16Vp2hJixXy3ilI3mXOdYtYrcU3COdVHYT6U1zm1x8OHjxNLm1lsvVHVHLzdZoOHY9P609dufL3efb7kekiOJbaJW2iSJZQ8mT0PRUCp6KoyePSMoeKoyh49IyiHi/g8VZTNWVTcJrg1y5NcGu5mdZmOuEOXFTLXoXjeHRtWdY44pbEkoXxjnKK9WaWSco+a3dWfWWqX6Tk+IcOtpp6Veus/L2S35I1gAAAAAAAAAAAAAABaxOIjXCU5vZjFZt/31keXLXFWb3naIZ48dslorWOuXOdO6TnibNqWcYRz9HDqiub5yOY1GstnvvPZ3R/O91mi0tNPTaO2e2f53NPOBjWzYRKxOJYrKSJWpImiWcLbJIZh6AFT0VRk8ekZQ8ekZwxlVGUMZZOAwdl9kaqo7U5eSXXJvqSJK13Q589MNJvedoh0/QGha8JXsx6VksnZY1vk+S5RXUi1WsVhx2t1t9TfeeqI7I5fu2hkpgAAAAAAAAAAAAAAEN1kx7unsRfycH9qfBy8OpHIcU4h6fJ0KT6tfnP87PF0HD9P6KvSntn5Qj9lZRrdtK2Y9lZYrdNWzFsgWa2SxKxOJYrKWJe8Do67ET2Ka5WPry9WP1pPcvaWcdbXnasMM2pxYK9LJbb+ckr0d8H8nk8Rfs84UrN/bl+hdppJ/ynwaTPx+I6sNPjPlHm3dOpWAilnXOxrrlbYn5RaRNGmxx3NdbjWrnstEe6I++67LU/R7/7fLwtvX9Rl+Hx8vqwjjGsj/P5R5MHF6h4WX7udtT6t6nD2p7/AHmE6Wvcs4uO56/riJ+U+XyRnSuqWKoTkkr4L51Se0lzcOPlmQ2wWr7W403F9Pm6p9Wfb2ePns0KZHDZSysBg7L7Y1VR2py8kuuUn1JEtazM7Qr589MNJveeqHUNAaErwlezHpWSydljW+T5LlFdSLlKxWHHazWX1N956ojsjl+7amSmAAAAAAAAAAAAAAAa7TmL9HVkt0p5xXNLrf8AfM1HGdb+H0/Rr+q3VH3n+d8rejxdPJvPZCIyrOIizexZYnWTVulizGsqLNLpq2YltZapdNWza6v6sSxLVlmcKU92W6dncuS7/Lmtxo9LbLHSt1V+qjruKRg9SnXb5R7/AC8fbP8ACYWumCrqhGuC4Risl4977zd1pFY2rDmMuW+W3SvO8rxkjAAAABGtZNVK8QnZVs1X8W+Fdj+llwfeveQ3xRbrjtbbQ8Uvg2pfrr8493k2Gr+hK8JXsx6VksnZY1vk+S5RXUjOlIrCrrdbfU33nqiOyOX7tqZqYAAAAAAAAAAAAAAAAi2l79u6XKPRXs4+/M+f8Z1Xp9Vbbsr1R8O357/JutLToY49vWwXE1e6zutygZxZnFliyomrdJWzK0Lof09mcl8lDJz+k+qH693ibrhelnU33n9Mdvt9nn7Peh1es9DT1f1T8vam8YpJJJJJJJLckuSOwiIiNoc5MzM7yqevAAAAAAAAAAAAAAAAAAAAAAAAAtYq3YrnLsxbXjluK+qzehw3ycomWeOvStFURyPmfX3t8pkBRoPd3h157ks29y8TOu8ztHa96W3al+j8Kqq4wXFb5PnJ8WfR9Fpo02GuOPj7Z72hz5Zy3m0sktIgAAAAAAAAAAAAAAAAAAAAAAAAAa/Tk8qWu1KK9+f5Gl4/k6OjmOcxH3+y1o43y+5HThm2AGR4MzRFO1dHlHOflw97RtuCYPS6yu/ZXefDs+cwr6q/RxT7epJjvmnAAAABz/WTWrF0Yy+muUFCEoKKcE3vrhJ7/Fs6DR8OwZcFb2id537/AGy1Go1mWmW1a9keUNb8dsf26/u4ln8q03KfFD+Pzc48D47Y/t1/dxH5VpuU+J+Pzc48D47Y/t1/dxH5VpuU+J+Pzc48D47Y/t1/dxH5VpuU+J+Pzc48D47Y/t1/dxH5VpuU+J+Pzc48D47Y/t1/dxH5VpuU+J+Pzc48FPjtj+3X93EflWm5T4n4/NzjwPjtj+3X93EflWm5T4n4/NzjwTHUnTFuLotlc4ucLtlbMdlbGxFrd47Rp+JaamDJEU7Jj7y2Oiz2y1mbc/skRrlwAAAAAAAAAarWB/JwX0/yZzv9ST/YpH/t9pXdF+qfc0Zx7ZAAPW11fj0rHyjFebf6HSf03WPSZLeyPnM+Sjrp9WsN4dc1oAAAAOR65/4livrVfyKzruHf+LT4/WXPav8A57/D6Q0xdVwAAAAAAACdfBfP/m48vQPz9IvyNDxuP+Off9m04ZP64933Ts0TagAAAAAAAADVawLoQ+v+TOc/qSP7FJ/9vtK7of1T7mjOPbNQBmBttXpdKxd0X73+p0v9NW9fJHsj7qGujqrLeHXNcAAAADkeuf8AiWK+tV/JrOu4d/4tPj9Zc9q/+e/w+kNMXVcAoBUAAAAAJx8F66WM+rhvxtNHxvsx/wD19mz4Z+q/w+6emgbYAAAAAAAAAa7TsM6c+zOL/L8zSf1Bj6Wj3/1mJ+33W9HO2TbnCO5nDNspmBRs8eM7Ql2zel2k4/mvwNzwHN6PWRE/5RMff7KurjpY/ck53jUgAAAA5FrpJf8AEsVv+dV/IrOv4bH/AOWnx+sue1c/37/D6Q0u0uaLu0q28G0uaG0m8G0uaG0m8G0uaG0m8Kpnj1UAAAn/AMGNXyeJn2rK4fZi3/Wc/wAat69K+yfn/wBNtw2PVtP8/nWmxpGzAAAAAAAAAFjG1bdc49bi8vHq95V1uH02nvj5xPj3fNJit0bxKI5nzRvHlyDGZeJTPdmE2eFe4tSTyaaafJp7iXHaaWi9e2J38EF77xsm2CxMba42R4SWfg+texn0jTZ658Vcle9rJjadl8neAAABblTBvNxi3zcVmZRa0d7zoxyU/Z4diH2UOnbm86Mcj9nh2IfZQ6duZ0Y5H7PDsQ+yh07czoxyP2eHYh9lDp25nRjk5jr7iozxrhFJRphGt5JJbfrSf+ZL+E6fhVJrg3t2zO/2aTXXicu0dyOGyUwCoHUfg+w2xgIyyydtllj89hPygjluK5OlqJjlER9/u3mgp0cO/OZ8vskhrV0AAAAAAAAAAIhpan0d011N7UfB/wC+a9h884rpvQaq1e6euPdPlO8fBtsOXpUiWBKZQ2LXWZWGUQhtkWJ2EkVVb5G01a0yqrPR2PKux7m+EJ8M/B8PLvN9wfW+gt6O/wCmflP7qs5Y3603OuSAAAAAAAAGu0/pWGEw87ZZN+rXF/Psfqx/N9yZNp8M5bxWP5CDU54w45vPw9suOWWSnKUpPalKTlKT4uTebfmzrKTERER2Q5npzM7z2vJJEsokMt2W71CDk1GKzlJqMVzk3kl5nszERvPY92meqHbNHYVU01VLhXXCGfPZWWZxWXJOTJa8987ulx06FIrHcyCNmAAAAAAAAAAGn1kwm3V6SPrV5t98Ovy4+Zo+OaP02H0le2v07/Dt8U2HJ0Z2RCczjYhJa6xOwkiFe2RYnMkrVVvkY85lilFO90j1b1q9HlTiG3DhC3i4fRlzj39Xhw6LQa6axGPJ2d08ve9w6yK+rfs5pxCakk4tSTSaaeaafBpm7id+uGyiYmN4ej16AAAADC0rpSnC1uy6aivmrjOb7MV1szpS152hDn1GPBXpXlyjWHTlmMu259GEc1VXnuhF/jJ7s2bvTY64q7R2uW1OrtqL9Kezuhqy7WyKLKksWSRKpJEpIlJNQtG+mxisazhh16R8nY81Beecv4SjxPUejw9GO23V8O/y+K9oMfTy790dfl5upHMt8AAAAAAAAAAACjQmNxA9YdHvD27l8nPNwfLnD2fgcRxLQfhsvq/pns8vh9HlrNLOZRiFa91mciatVW91mci1Sire6zJl7HRUvZmaJ09iMK/kp9DPN1T6Vb78up+GRssF7U7GGLWZcE+pPVyns/nuS/R+vmHlkrq50vrcflK/d0vcX65ontbTFxjFbqyRMfOPP5N1TrFgprNYqhfXnGD8pZMk6dea9XXaa0bxePjO31XZaawi44rDL/7VfqOlXmy/F4P96+MMPFa2YCvjfGb5VqU/ell7x0oQ34lpqf57+7r+iO6U+EBtNYanZ/8AZdk2vCC/X2ElYiWtz8ansxV+M+X7oZjsbbfN2XWSsm+uXUuSXBLuRfxTERtDS5c18tuled5YxbpZhEhYrZJEqk0WSRL1CLbSinKUmlGK3tybySS55kkW265SVmZ6odf1X0QsJho1vL0kunc112Nb14JJL2HNavUenyTbu7vc6jS4PQ44r39/vbcrLIAAAAAAAAAAAAGNpDBQvrlXNbnwa4xl1SXeQajT0z45x37Po8mN42c20rgbMPY67F3xkvVnHmjj8+kvp79C3jza7LvWdpa+TFKql7LUmW6VVr2WpMu46qt7LTZbrCvaXklRyHrwPRQzrIoyzSXjyy5SzxRlqlhQs1syiQmrZJEp/qFq41s4u6OTazw8H1Jr9613rh58stfrdVv/AG6/Hyb/AIZo9ts1/hH38k6NW3QAAAAAAAAAAAAAABh6U0bVia3Cxd8ZL1oPmmQajT0z16N/+mGTHF42lzbTeh7sLPKa2oN9C2KexLu7n3fic/l0l8FtrdnNpdRitinr7ObVSZnSqhay1JlukK1peGWKwhmVDNiAABlAoyesvHllqkjyy1SzxQs1sJzqlqa2434uOSWTrokt7fVKxcvo+fIr59XtHRp4+Tf6DhcztkzR7o8/LxdANe6AAAAAAAAAAAAAAAAAALd9MZxcJxjOMllKMknFrvR5asWjaY6nlqxaNp7EL03qQ988LLv9DY/dGb/CXmUb6KI66eDT6nhk9uKfhP2nz8UMxmGsqlsWwlXLlNNN965rvRHFJjqlostLY56N42n2rDJIQyoevAAAPYFCWsijLNJeNjonQGJxTXoq3sdds841L29fszJ4yRHatafRZs/6I6uc9n89zoOr2qNGFynL5e5cJyXRg/oR6vHj4GF81rdXc6LR8Nx4PWnrtz8oSMibIAAAAAAAAAAAAAAAAAAAABZxWFrtjsWQhZHszipLx3nkxE9rC+OmSOjeImPajmO1Fwk83W7KHyi9qGfhLf5NEc4a9zW5eD4L9dd6/T5tJidQMQv3d1Ni+mp1v3bRhOGe5QvwXLH6bRPv3jzYFupmPjwqhP6tsP6sjH0Vle3CtVH+MT7pj77La1Q0h/4+XjbR/qHo7cmP5Zqv9PnHmyatR8bLj6GH1rH/AEpnsYrJa8I1M9u0fH9mzwvwevc7cTu641Q3/ak/yJIxrWPgn+9/CPvPk3+jtU8FTk1V6WS+dc9t+OXqp+CJIhsMPDdPi64rvPt6/wBm7SPV9UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/2Q==",
    },
    {
      id: 3,
      company: "Microsoft",
      posted: "1 week ago",
      title: "UX Researcher",
      tags1: "Contract",
      tags2: "Senior level",
      rate: "$110/hr",
      location: "Hyderabad, India",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      id: 4,
      company: "Netflix",
      posted: "3 days ago",
      title: "Visual Designer",
      tags1: "Part time",
      tags2: "Mid level",
    rate: "$85/hr",
      location: "Remote",
      image:
        "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      company: "Meta",
      posted: "6 days ago",
      title: "UI Designer",
      tags1: "Full time",
      tags2: "Junior level",
      rate: "$70/hr",
      location: "Gurgaon, India",
      image:
        "https://images.unsplash.com/photo-1665799871677-f1fd17338b43?q=80&w=814&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 6,
      company: "Adobe",
      posted: "4 days ago",
      title: "Interaction Designer",
      tags1: "Full time",
      tags2: "Senior level",
      rate: "$130/hr",
      location: "Noida, India",
      image:
        "https://images.unsplash.com/photo-1649734926700-8dfb770ffaee?q=80&w=862&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 7,
      company: "Uber",
      posted: "1 day ago",
      title: "UX Designer",
      tags1: "Contract",
      tags2: "Mid level",
      rate: "$100/hr",
      location: "Pune, India",
      image:
        "https://images.unsplash.com/photo-1593950315186-76a92975b60c?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 8,
      company: "Spotify",
      posted: "8 days ago",
      title: "Product UX Designer",
      tags1: "Remote",
      tags2: "Senior level",
      rate: "$140/hr",
      location: "Remote",
      image:
        "",
    },
    {
      id: 9,
      company: "Flipkart",
      posted: "3 days ago",
      title: "UI Engineer",
      tags1: "Full time",
      tags2: "Mid level",
      rate: "$90/hr",
      location: "Bangalore, India",
      image:
        "",
    },
    {
      id: 10,
      company: "Swiggy",
      posted: "2 weeks ago",
      title: "Design Lead",
      tags1: "Full time",
      tags2: "Senior level",
      rate: "$150/hr",
      location: "Bangalore, India",
      image:
        "",
    },
  ];


  return (
    <div className="parent">
      {jobs.map(function (elem) {
        return <Card company={elem.company}
          posted={elem.posted}
          title={elem.title}
          tags1={elem.tags1}
          tags2={elem.tags2}
          rate={elem.rate}
          location={elem.location}
          image={elem.image} />
      })}
    </div>
  )
}

export default App
