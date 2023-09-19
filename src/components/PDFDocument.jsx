import React from "react";
import PropTypes from "prop-types";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from "@react-pdf/renderer";
import RobotoBold from "../assets/fonts/Roboto-Bold.ttf";
import Roboto from "../assets/fonts/Roboto-Regular.ttf";

Font.register({ family: "RobotoBold", src: RobotoBold });
Font.register({ family: "Roboto", src: Roboto });

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "white",
    flex: 1,
  },
  mainview: {
    flex: 1,
    flexDirection: "row",
  },
  section: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
    fontWeight: "black",
    paddingHorizontal: 30,
    paddingTop: 30,
    fontFamily: "RobotoBold",
  },
  paragraph: {
    fontSize: 16,
    flexDirection: "column",
    color: "#000a",
    fontFamily: "Roboto",
  },
  titleParagraph: {
    fontSize: 17,
    fontFamily: "RobotoBold",
    color: "black",
  },
});

function PDFDocument({ title, data = [] }) {
  return (
    <Document
      author='Your Name'
      title='Reviwer Generator'
      creator='Ronald Gulayan'
      language='English'
      subject='Reviewer'
      keywords='Ron?'
      style={{ height: "100%" }}
    >
      <Page
        bookmark={{ title: "hello" }}
        break
        wrap={false}
        size='A4'
        style={styles.page}
      >
        <Text style={styles.title}>{title ? title : "Reviwer Generator"}</Text>
        {data.length === 0 && (
          <Text
            style={{
              padding: 30,
            }}
          >
            empty
          </Text>
        )}
        <View style={styles.mainview}>
          <View style={styles.section}>
            {data.map((data, i) => {
              return (
                <View key={i} style={{ marginVertical: 5 }}>
                  <Text style={styles.titleParagraph}>{`${i + 1}. ${
                    data.title
                  }`}</Text>
                  <Text style={styles.paragraph}>{data.description}</Text>
                </View>
              );
            })}
          </View>
        </View>
      </Page>
    </Document>
  );
}

PDFDocument.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default PDFDocument;
