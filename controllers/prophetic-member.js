const { PropheticMember } = require('../models');

const paginate = (query, { page, length }) => {
  const offset = page * length;
  const limit = length;

  return {
    ...query,
    offset,
    limit
  };
};

const queries = (query, searchText) => {
  const queryResult = {};
  Object.values(query).forEach((value) => {
    if (value.searchable) {
      queryResult[value.data] = `%${searchText}%`;
    }
  });

  return queryResult;
};

const list = async (req, res, next) => {
  const {
    order, page, length, search, columns
  } = req.body;
  try {
    const result = await PropheticMember.findAll(
      paginate(
        {
          where: queries(columns, search),
          order: [order.column, order.direction]
        },
        { page, length }
      )
    );

    return res.status(200).json({
      success: true,
      code: 200,
      message: 'OK',
      data: result
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  list
};
