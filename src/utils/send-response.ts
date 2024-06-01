export const sendResponseDetail = (attributes: any) => {
  return {
    data: {
      id: attributes?.id,
      attributes,
    },
    meta: {}
  }
}