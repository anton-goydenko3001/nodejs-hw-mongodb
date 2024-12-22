export const parseFavoriteParam = (query) => {
  const { isFavourite, contactType } = query;

  const parsedIsFavourite =
    isFavourite === 'true' || isFavourite === '1'
      ? true
      : isFavourite === 'false' || isFavourite === '0'
      ? false
      : undefined;

  const parsedContactType = contactType ? contactType : undefined;

  return {
    isFavourite: parsedIsFavourite,
    contactType: parsedContactType,
  };
};
