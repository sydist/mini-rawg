import { HStack, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GenreListItemSkeleton() {
  return (
    <HStack spacing={3}>
      <Skeleton boxSize={12} borderRadius={8} />
      <SkeletonText fontSize="lg" noOfLines={1} width={16} />
    </HStack>
  );
}
