module.exports = (connection, DataTypes) => {
    const Edit = connection.define(
      "Edit",
      {
        name: {
          type: DataTypes.ENUM([ "No Options"]),
          defaultValue: "No Options",
        },
      },
      { 
      }
    );
    return Edit
  };
  