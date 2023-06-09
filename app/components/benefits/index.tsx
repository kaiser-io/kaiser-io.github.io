import React from "react";
import BenefitCard from "./benefit-card";
import {
  deployEasily,
  networkComplexity,
  storageDisks,
} from "./cards-icon-list-data";

const Benefits = () => {
  return (
    <div
      className={`lg:px-20 
          bg-[url("/images/bg-lines/blue-center.svg")] 
          bg-[position:top_-250px_left_-750px]
          md:bg-[position:top_-380px_right_150px]
          bg-no-repeat`}
    >
      <BenefitCard
        title={"Deploy easily with few clicks"}
        description={
          "KAISER hides the deployment complexity and deploys transparently"
        }
        footerText="Kaiser make a new abstraction level
        to create and manage your kubernetes clusters"
        iconWithDescription={deployEasily}
        svgShapeSrc={"/images/mini-pics/boxes/deploy-easily/deploy-shape.png"}
        svgShapeWidth={785}
        svgShapeHeight={785}
        cardPosition="top"
      />
      <BenefitCard
        title={"Get rid of network complexity"}
        description={
          "KAISER takes care of your DNS, load balancer, service discovery, network rules,...etc."
        }
        iconWithDescription={networkComplexity}
        svgShapeSrc={
          "/images/mini-pics/boxes/network-complexity/network-shape.png"
        }
        svgShapeWidth={765}
        svgShapeHeight={765}
        cardPosition="center"
      />
      <BenefitCard
        title={"Storage disks"}
        description={
          "KAISER takes care of your storage devices and mange them properly"
        }
        iconWithDescription={storageDisks}
        svgShapeSrc={"/images/mini-pics/boxes/storage-disks/storage-shape.png"}
        svgShapeWidth={747}
        svgShapeHeight={747}
        cardPosition="bottom"
      />
    </div>
  );
};

export default Benefits;
