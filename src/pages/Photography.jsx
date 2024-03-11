import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa6";
import Thumbnail from "../assets/images/DSC07414.jpg";
import PostItem from "../components/PostItem";
import AnimatedPage from "../components/AnimatedPage";

// TODO: Fetch real data
const DUMMY_POSTS = [
  {
    id: "1",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "2",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "3",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "4",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
  {
    id: "5",
    thumbnail: Thumbnail,
    title: "Egypt",
    year: "2023",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius esse, nisi id atque, eaque minus vitae placeat unde delectus harum, ea sed laudantium odio rerum sapiente omnis distinctio! Earum repellat enim expedita repudiandae quod aperiam consectetur suscipit? Impedit optio ipsam quae sequi atque. Ea tempore, eum ad placeat sequi fugit sit et temporibus delectus soluta perspiciatis saepe quae amet! Quibusdam accusantium cum quas soluta nesciunt facilis neque sequi amet molestias ducimus laudantium, totam unde suscipit corporis. Amet ut vitae aperiam. Molestiae natus iste commodi ea voluptate vel officia, perspiciatis laboriosam obcaecati mollitia? Alias temporibus accusamus necessitatibus suscipit obcaecati rerum nihil culpa, beatae sequi numquam! Veritatis veniam unde, ab minima ea nam commodi ipsa sit doloremque at eius eos reprehenderit debitis, itaque in sapiente temporibus molestias nostrum voluptatem sunt officiis amet quam. Officiis veniam, rerum minima, ullam qui illo nemo error corrupti, eligendi animi facere nihil. Id quaerat alias cum repellat.",
  },
];

const Photography = () => {
  const [posts] = useState(DUMMY_POSTS);

  return (
    <AnimatedPage>
      <div className="flex flex-col pt-10 mt-14">
        <div className="flex items-center justify-center my-auto">
          <h1 className="text-md text-[#cccccc] uppercase font-extralight">
            A. Rice Photography <span className="text-red-500">.</span>
          </h1>
          <a
            href="instagram://user?username=mr_arroz"
            target="_blank"
            rel="noreferrer"
            className="ml-2 text-[#cccccc] hover:text-[#e35757]"
          >
            <FaInstagram size={20} />
          </a>
        </div>
        <div className="mx-auto sm:p-1 md:p-10">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {posts.map(({ id, thumbnail, title, year, description }) => (
              <PostItem
                key={id}
                postID={id}
                thumbnail={thumbnail}
                title={title}
                year={year}
                description={description}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default Photography;
