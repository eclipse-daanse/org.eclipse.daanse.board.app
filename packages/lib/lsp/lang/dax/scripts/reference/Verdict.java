/*********************************************************************
 * Copyright (c) 2026 Contributors to the Eclipse Foundation.
 *
 * This program and the accompanying materials are made
 * available under the terms of the Eclipse Public License 2.0
 * which is available at https://www.eclipse.org/legal/epl-2.0/
 *
 * SPDX-License-Identifier: EPL-2.0
 *
 * Contributors:
 *   Smart City Jena
 **********************************************************************/

import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;

import org.eclipse.daanse.dax.parser.ccc.DaxParser;

/**
 * What the Eclipse Daanse DAX parser says about each file it is given.
 *
 * Run by scripts/record-corpus.mjs inside a container, as a single-file
 * source program: {@code java -cp <parser jars> Verdict.java <file>...}.
 * One line per file on stdout, tab-separated:
 *
 * <pre>
 *   file  accepts
 *   file  rejects  first line of the error
 * </pre>
 *
 * The generated parser is used directly rather than through
 * DaxParserWrapper: the wrapper adds logging (slf4j) and nothing else, and
 * the parse is the same call either way. A file ending in .daxe is a
 * formula and goes through ExpressionRoot, the entry point behind
 * DaxParser#parseExpression(); every other file is a query and goes through
 * DaxStatement.
 */
public class Verdict {

    public static void main(String[] args) throws Exception {
        for (String name : args) {
            Path file = Path.of(name);
            String text = Files.readString(file, StandardCharsets.UTF_8);
            try {
                DaxParser parser = new DaxParser(text);
                if (name.endsWith(".daxe")) {
                    parser.ExpressionRoot();
                } else {
                    parser.DaxStatement();
                }
                System.out.println(file.getFileName() + "\taccepts");
            } catch (Throwable error) {
                String message = String.valueOf(error.getMessage()).strip();
                int end = message.indexOf('\n');
                if (end >= 0) {
                    message = message.substring(0, end).strip();
                }
                System.out.println(file.getFileName() + "\trejects\t" + message);
            }
        }
    }
}
