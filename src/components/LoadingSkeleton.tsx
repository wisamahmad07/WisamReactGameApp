import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const LoadingSkeleton = () => {
  return (
    <Card width="300px" overflow="hidden" borderRadius={10}>
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default LoadingSkeleton;
