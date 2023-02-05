def have_problem_fact(ProblemFact):
    ProblemFact = ProblemFact.split(",")
    ProblemFact = list(map(lambda x: x.upper().strip(), ProblemFact))
    # Have Problem Fact?
    if any('NIL' not in s for s in ProblemFact):
        # True
        # Insert Problem Fact into BB
        return list(ProblemFact)
    else:
        # False
        return list([])


def check_starting_node_and_concluding_node(Rules):
    Starting_Node = []
    Concluding_Node = []
    allfact = []
    allconclude = []
    # setup a set of fact and conclude
    for rule in Rules:
        if 'fact1' in rule and rule['fact1'] not in allfact:
            allfact.append(rule['fact1'])
        if 'fact2' in rule and rule['fact2'] not in allfact:
            allfact.append(rule['fact2'])
        if 'conclude1' in rule and rule['conclude1'] not in allconclude:
            allconclude.append(rule['conclude1'])
        if 'conclude2' in rule and rule['conclude2'] not in allconclude:
            allconclude.append(rule['conclude2'])

    # convert list into dict
    allfact = set(allfact)
    allconclude = set(allconclude)

    # find a different() for starting node and concluding node
    Starting_Node = list(allfact.difference(allconclude))
    Concluding_Node = list(allconclude.difference(allfact))

    return Starting_Node, Concluding_Node


def get_premise(rule):
    premises = []
    if 'fact1' in rule and rule['fact1'] not in premises:
        premises.append(rule['fact1'])
    if 'fact2' in rule and rule['fact2'] not in premises:
        premises.append(rule['fact2'])
    return premises


def inference_engine(Rules, ProblemFact):
    # Start

    # Have Problem Fact?
    BB = have_problem_fact(ProblemFact=ProblemFact)

    # Load KB
    KB = list(Rules)

    # Check Starting node Check Concluding node
    starting_node, concluding_node = check_starting_node_and_concluding_node(
        Rules=KB)

    remained_rules = list(KB)
    getFirstRule = False
    asked_premise = []
    while True:
        getFirstRule = False
        for rule in remained_rules:
            if getFirstRule:
                break
            premises = get_premise(rule=rule)
            for premise in premises:
                if premise in BB:
                    if premise == premises[-1] and premises[0] not in BB:
                        continue
                    if 'operator' in rule and rule['operator'] == "AND" and premise != premises[-1]:
                        continue
                    else:
                        remained_rules.remove(rule)
                        if 'conclude1' in rule and rule['conclude1'] not in BB:
                            BB.append(rule['conclude1'])
                        if 'conclude2' in rule and rule['conclude2'] not in BB:
                            BB.append(rule['conclude2'])
                        getFirstRule = True
                        break

                else:
                    if premise in starting_node and premise not in asked_premise:
                        if premise not in asked_premise:
                            asked_premise.append(premise)
                        queryString = "Is {} True / False ? : "
                        userInput = input(queryString.format(premise)).upper()
                        if userInput == "TRUE" or userInput == "T":
                            if premise not in BB:
                                BB.append(premise)
                            getFirstRule = True
                            break
                        else:
                            continue
                    else:
                        continue
        if not getFirstRule:
            break
    answer = list(set(concluding_node).intersection(set(BB)))
    return {
        'workingmemory': BB,
        'concluding': answer,
    }


data = [{'fact1': 'Q', 'conclude1': 'X'}, {'fact1': 'M', 'conclude1': 'Y'}, {'fact1': 'W', 'operator': 'AND', 'fact2': 'X', 'conclude1': 'G', 'conclude2': 'Z'}, {'fact1': 'A', 'operator': 'AND', 'fact2': 'B', 'conclude1': 'C'}, {'fact1': 'D',
                                                                                                                                                                                                                                     'operator': 'OR', 'fact2': 'Z', 'conclude1': 'E'}, {'fact1': 'C', 'operator': 'AND', 'fact2': 'E', 'conclude1': 'F'}, {'fact1': 'X', 'conclude1': 'A'}, {'fact1': 'Y', 'conclude1': 'B'}, {'fact1': 'F', 'conclude1': 'S'}, {'fact1': 'G', 'conclude1': 'R'}]

# inputFact = "nil"
# inputFact = "Q, M, W, D"

inputFact = input("Enter starting fact: ")

answer = inference_engine(data, inputFact)
