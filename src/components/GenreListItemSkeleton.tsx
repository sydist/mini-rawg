import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GenreListItemSkeleton() {
  return (
    <HStack spacing={2}>
      <Skeleton boxSize={8} borderRadius={8} />
      <SkeletonText fontSize="lg" noOfLines={1} width={16} />
    </HStack>
  );
}
